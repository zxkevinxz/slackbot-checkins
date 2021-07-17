const settingsQuestions = {
  "response_action": "push",
  "view": {
    "type": "modal",
    "title": {
      "type": "plain_text",
      "text": "Check-in Questions"
    },
    "submit": {
      "type": "plain_text",
      "text": "Submit"
    },
    "blocks": [
      {
        "type": "input",
        "element": {
          "type": "plain_text_input",
          "action_id": "title",
          "placeholder": {
            "type": "plain_text",
            "text": "What do you want to ask about?"
          }
        },
        "label": {
          "type": "plain_text",
          "text": "Question 1"
        }
      },
      {
        "type": "actions",
        "elements": [
          {
            "type": "button",
            "action_id": "add_question",
            "text": {
              "type": "plain_text",
              "text": "Add another question"
            }
          }
        ]
      }
    ]
  }
}

export default settingsQuestions;