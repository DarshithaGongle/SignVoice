# SignVoice

SignVoice is a two-way sign-language communication web app. It recognizes hand signs from a webcam and speaks them aloud, and it can also take spoken/typed text and perform it back as sign language through a 3D animated avatar. It supports both **American Sign Language (ASL)** and **Indian Sign Language (ISL)**.

Built with Django (backend), OpenCV/MediaPipe/Keras (hand tracking + recognition), and Three.js (3D avatar rendering).

## Features

- **Sign → Speech** — recognizes hand signs from your webcam in real time and reads the resulting sentence aloud, with word-suggestion autocomplete.
- **Speech → Sign** — takes spoken or typed text and animates a 3D avatar performing the signs.
- **Dictionary** — browsable reference of ASL and ISL signs.
- **Games** — a quiz mode that shows a sign animation and asks you to pick its meaning.

## Tech stack

| Layer | Tech |
|---|---|
| Backend | Django 4.1 |
| Hand tracking | OpenCV, MediaPipe, cvzone |
| Sign recognition | Keras / TensorFlow (two trained `.h5` models — one per sign language) |
| Word suggestions | PyEnchant |
| Database | MySQL |
| 3D avatar | Three.js (GLTF model + animation clips) |

## Project structure

```
signvoice/
├── manage.py                 # Django entry point
├── signvoice/                 # Django project config (settings, urls)
├── homepage/                  # Main app: views, recognition logic, trained models
│   ├── views.py               #   ASL/ISL recognition + word-suggestion endpoints
│   ├── cnn8grps_rad1_model.h5 #   ASL recognition model
│   └── model.h5                #   ISL recognition model
├── templates/index.html       # Single-page frontend
└── static/                    # Frontend JS/CSS + 3D avatar assets
    ├── home.js                 #   UI navigation, mic input, word suggestions
    ├── home2.js                 #   3D avatar engine (Three.js)
    ├── home3.js                 #   Quiz/game engine
    └── Models/, Animations/    #   Avatar model + sign animation clips
```

## Prerequisites

- Python 3.11
- MySQL Server
- [Homebrew](https://brew.sh/) (macOS) — needed for the `enchant` spell-check library

## Setup

**1. Clone the repo**
```bash
git clone <your-repo-url>
cd signvoice
```

**2. Create a virtual environment and install Python dependencies**
```bash
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**3. Install the `enchant` system library** (used by PyEnchant for word suggestions)
```bash
brew install enchant      # macOS
# Debian/Ubuntu: sudo apt install libenchant-2-2
```

> **macOS note:** PyEnchant sometimes can't find Homebrew's `enchant` library on its own. If you get an `enchant` import error, run the server with:
> ```bash
> DYLD_LIBRARY_PATH=/opt/homebrew/lib python3 manage.py runserver
> ```

**4. Set up MySQL**
```bash
brew services start mysql
mysql -u root -e "CREATE DATABASE signvoice;"
```
Database credentials are configured in [`signvoice/settings.py`](signvoice/settings.py) (defaults to user `root`, no password, matching a fresh local MySQL install). Update them there if your setup differs.

**5. Run migrations**
```bash
python manage.py migrate
```

**6. Start the server**
```bash
python manage.py runserver
```
Visit **http://127.0.0.1:8000/** in your browser. Allow camera and microphone access when prompted — the app needs both for sign recognition and speech input.

## Known quirks

- `mediapipe` is pinned to `0.10.14` in `requirements.txt`. Newer mediapipe releases removed the legacy `mediapipe.solutions` API that this project's hand-tracking (via `cvzone`) depends on — installing a newer version will break sign recognition.
- `assets/` is not checked into git — it's Django's `collectstatic` build output (a generated copy of `static/`), regenerate it with `python manage.py collectstatic` if you need it for production deployment.

## Team

Built by Ch. Deepika, Kuppa Ksheeraja Manaswini, Darshitha, Harika, and Sirivennela.
