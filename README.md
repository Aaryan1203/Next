# Next

## Overview

This web application aims to streamline the interview preparation process for students and job-seekers, providing an interactive platform to practice answering interview questions verbally. It leverages modern web technologies and the OpenAI API to create a comprehensive and user-friendly interview simulator.

### Key Features:
- **Dynamic Question Generation**: Automatically generates interview questions based on user inputs like position and type.
- **Speech-to-Text**: Integrates Web Speech API, enabling users to respond verbally to questions.
- **Real-time Feedback**: Uses OpenAI’s API to analyze verbal responses, providing instant, actionable feedback.
- **Interactive UI**: Allows users to select, practice, and review feedback for each question dynamically.

## Tech Stack
- JavaScript
- Node.js
- Web Speech API
- OpenAI API

## Application Flow
1. **Question Generation**: Users input desired position, question type(s), and number of questions. The system generates pertinent interview questions.
2. **Question Selection**: Users select from the generated questions for practice.
3. **Verbal Practice**: Users articulate their answers verbally using speech-to-text functionality.
4. **Instant Feedback**: Upon submission, the OpenAI API provides real-time, constructive feedback based on the user's response.
5. **Iterative Practice**: Users can adjust their answers based on feedback and practice as many times as desired.

### Using the App
1. **Define Practice Criteria**: Enter the position, type(s) of questions, and the number of questions you’d like to generate.
2. **Generate Questions**: Click “Generate” to produce questions for selection and choose the ones you’d like to practice.
3. **Start Practicing**: Once you've selected your questions, hit “Start Practicing!” to begin the interactive simulation.
4. **Record & Submit**: Utilize the “Start Recording” and “Stop Recording” buttons to verbally answer questions. Submit your answers and receive immediate feedback.
5. **Iterative Improvement**: Use the provided feedback to refine your answers, and practice again by clicking “Answer Again”.
