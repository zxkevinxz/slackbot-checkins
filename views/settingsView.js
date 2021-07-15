const settingsView = {
  "type": "modal",
  "callback_id": "modal-settings",
  "title": {
    "type": "plain_text",
    "text": "Check-in Settings"
  },
  "submit": {
    "type": "plain_text",
    "text": "Submit"
  },
  "blocks": [
    {
      "type": "input",
      "block_id": "settings-days",
      "element": {
        "type": "checkboxes",
        "options": [
          {
            "text": {
              "type": "plain_text",
              "text": "Monday",
              "emoji": true
            },
            "value": "MONDAY"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Tuesday",
              "emoji": true
            },
            "value": "TUESDAY"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Wednesday",
              "emoji": true
            },
            "value": "WEDNESDAY"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Thursday",
              "emoji": true
            },
            "value": "Thursday"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Friday",
              "emoji": true
            },
            "value": "FRIDAY"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Saturday",
              "emoji": true
            },
            "value": "SATURDAY"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Sunday",
              "emoji": true
            },
            "value": "SUNDAY"
          }
        ],
        "action_id": "checkboxes-action"
      },
      "label": {
        "type": "plain_text",
        "text": "Check-in Schedule",
        "emoji": true
      }
    },
    {
      "type": "section",
      "block_id": "settings-time",
      "text": {
        "type": "plain_text",
        "text": "Reminder time"
      },
      "accessory": {
        "type": "timepicker",
        "initial_time": "12:00",
        "placeholder": {
          "type": "plain_text",
          "text": "Select time",
          "emoji": true
        },
        "action_id": "timepicker-action"
      }
    },
    {
      "type": "input",
      "block_id": "settings-users",
      "element": {
        "type": "multi_users_select",
        "placeholder": {
          "type": "plain_text",
          "text": "Select users",
          "emoji": true
        },
        "action_id": "multi_users_select-action"
      },
      "label": {
        "type": "plain_text",
        "text": "Who to remind",
        "emoji": true
      }
    }
  ],
}

export default settingsView;