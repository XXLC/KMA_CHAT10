import time
import re
import requests

telegram_bot_token = '6888513946:AAFq5j0r76WWHzoLuShvc3yNjadxE_G7a8Q'
chat_id = '-1002130356442'
message_thread_id = 1011

#message subject
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
    url = f'https://api.telegram.org/bot{telegram_bot_token}/sendMessage'
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

if __name__ == "__main__":
    monitor_log_file()
