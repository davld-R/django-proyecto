#!/usr/bin/env bash
# exit on error
set -o errexit

# poetry install
pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py migrate

set -e

echo "Running build script..."

echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('david', 'david@gmail.com', 'david123')" | python manage.py shell

echo "Build script finished."