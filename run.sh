echo "saving cert to  /workspace/.postgresql/root.crt"
curl --create-dirs -o /workspace/.postgresql/root.crt -O https://cockroachlabs.cloud/clusters/75d62802-e955-409b-8a17-fe7c6f7d2bbc/cert

echo "adding crontabs"
# python manage.py crontab add

echo "running g unicorn"
gunicorn --worker-tmp-dir /tmp app.wsgi

