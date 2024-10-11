#!/bin/bash
snort -q -l /var/log/snort -i eth0 -A console -c /etc/snort/snort.conf > /home/longpq/scripts/snort_output.log