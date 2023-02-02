curl --create-dirs -o $HOME/.postgresql/root.crt -O https://cockroachlabs.cloud/clusters/75d62802-e955-409b-8a17-fe7c6f7d2bbc/cert

gunicorn --worker-tmp-dir /tmp app.wsgi .