
# Omnify Blog Application

A full-stack blog application built as part of the Omnify assignment.  
It allows users to sign up, log in, create blogs, and view blogs publicly.

---

## 🚀 Features
- User authentication (signup & login with JWT).
- Only logged-in users can create, edit, or delete blogs.
- Public blog listing page with pagination.
- Blog detail page (view full content).
- Responsive design (desktop & mobile).

---

## 🛠️ Tech Stack
- **Frontend**: React (Netlify for deployment)  
- **Backend**: Django REST Framework  
- **Database**: SQLite (can be replaced with PostgreSQL/MySQL)  
- **Deployment**: GitHub + (Netlify for frontend, Render for backend)

---

## 🔧 Setup Instructions

### Backend (Django)
1. Clone the repo:
   ```bash
   git clone https://github.com/tejaswini0531/Omnify_Blog.git
   cd Omnify_Blog/backend
Create and activate virtual environment:

bash
Copy code
python -m venv venv
venv\Scripts\activate    # Windows
source venv/bin/activate # Mac/Linux
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Run migrations:

bash
Copy code
python manage.py makemigrations
python manage.py migrate
Start server:

bash
Copy code
python manage.py runserver
Backend runs at: http://127.0.0.1:8000

Frontend (React)
Navigate to frontend:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Start development server:

bash
Copy code
npm start
Frontend runs at: http://localhost:3000

