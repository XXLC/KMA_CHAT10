import time
import re
import requests
import telebot
import subprocess
import urllib.parse
import time
import threading
from requests.exceptions import ReadTimeout

bot_token = '6888513946:AAFq5j0r76WWHzoLuShvc3yNjadxE_G7a8Q'
chat_id = '-1002130356442'
message_thread_id = 1011
bot = telebot.TeleBot(bot_token)

#subject
ddos_subject = 'DDoS Attack Detected'
port_scan_subject = 'Port Scan Attack Detected'

#log_file_path = '/var/log/snort/snort.alert.fast'
#log_file_path = '/home/longpq/scripts/snort_output.log'
#log_file_path = r'E:\Work\Github\KMA_CHAT10\IoTSecurity_CHA12\BTCN\log.txt'
log_file_path = r'D:\Documents\Github\KMA_CHAT10\IoTSecurity_CHA12\BTCN\log.txt'
#pattern
ddos_pattern = re.compile(r"Possible DDoS Attack Detected")
port_scan_pattern = re.compile(r"Classification: Attempted Information Leak")

def send_telegram_message(subject, message):
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = {
        'chat_id': chat_id,
        'message_thread_id': message_thread_id,
        'text': f'{subject}: {message}'
    }
    try:
        response = requests.post(url, json=data)
        if response.status_code == 200:
            print("Telegram message sent successfully")
        else:
            print(f"Failed to send message: {response.status_code}, {response.text}")
    except Exception as e:
        print(f"Error sending message: {e}")

def monitor_log_file():
    with open(log_file_path, 'r') as file:
        file.seek(0, 2) 
        while True:
            line = file.readline()
            if not line:
                time.sleep(0.1)  
                continue
            if ddos_pattern.search(line):
                print(f"DDOS Alert: {line.strip()}")
                send_telegram_message(ddos_subject, line.strip())
            elif port_scan_pattern.search(line):
                print(f"Port Scan Alert: {line.strip()}")
                send_telegram_message(port_scan_subject, line.strip())

@bot.message_handler(commands=['block'])
def block(message):
    try:
        command_parts = message.text.split(" ")
        message_text = message.text
        if len(command_parts) != 2:
            print(f"Message: {message_text} - sai cú pháp")
            bot.reply_to(message, "Sử dụng: /block ip")
            return

        block_ip = command_parts[1]
        #command = f"iptables -I INPUT -s {block_ip} -j DROP"
        command = f"ipconfig"
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        if result.returncode == 0:
            msg = f"Đã block ip {block_ip}!"
            print(msg)
            bot.reply_to(message, msg)
        else:
            msg = f"Lỗi khi block: {result.stderr}"
            print(msg)
            bot.reply_to(message, msg)
    except Exception as e:
        print(f"Đã xảy ra lỗi: {str(e)}")
        bot.reply_to(message, f"Đã xảy ra lỗi: {str(e)}")

MAX_RETRIES = 5
RETRY_DELAY = 5
    
def reliable_polling(bot):
    retries = 0
    while retries < MAX_RETRIES:
        try:
            bot.polling(none_stop=True)
            break
        except ReadTimeout as e:
            retries += 1
            print(f"Timeout: {e}. Thử lại sau {RETRY_DELAY} giây...")
            msg = f"Script noti.py có lỗi: {e}. Đang thử lại"
            encoded_msg = urllib.parse.quote(msg)
            send_telegram_message("BOT error", encoded_msg)
            time.sleep(RETRY_DELAY)
        except Exception as e:
            print(f"Đã xảy ra lỗi: {e}")
            msg = f"Script noti.py có lỗi: {e}"
            encoded_msg = urllib.parse.quote(msg)
            send_telegram_message("BOT error", encoded_msg)
            break

if __name__ == "__main__":

    monitor_thread = threading.Thread(target=monitor_log_file)  # Remove parentheses
    monitor_thread.start()
    
    block_thread = threading.Thread(target=reliable_polling, args=(bot,))  # Remove parentheses and pass bot as an argument
    block_thread.start()
