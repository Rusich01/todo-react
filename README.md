PMN-1 — Базовий TODO-список

User Story: Як користувач, я хочу бачити список своїх активних завдань та додавати нові через поле введення, щоб я міг керувати тим, що мені потрібно зробити.

Acceptance Criteria:

Існує поле введення для назви нового завдання.

Коли користувач натискає Enter або кнопку «Add», завдання миттєво додається до TODO-списку.

Список завдань відображається під заголовком "TODO list".

Кожне завдання відображає: • Назву завдання

Якщо завдань немає, замість списку відображається повідомлення "No todos yet".

PMN-2 — Додавання завдання з затримкою

User Story: Як секретар Трампа, я хочу, щоб нові завдання з’являлися в списку лише після 1-секундної (налаштовуваної) затримки, щоб я міг передумати або підготувати наступне завдання.

Acceptance Criteria:

Після натискання кнопки «Add» або Enter завдання планується з’явитися у списку через 1 секунду.

Поки завдання очікує, воно не відображається у списку.

Можна запланувати кілька завдань, якщо користувач вводить їх швидко.

Є кнопка "Cancel", яка з’являється, коли є будь-яке очікуюче завдання.

Коли натискається кнопка "Cancel", усі очікуючі завдання видаляються з черги і не будуть додані.

PMN-3 — Позначення завдань як виконаних та розділення списків

User Story: Як користувач, я хочу мати змогу позначати завдання як виконані або невиконані та бачити активні та завершені завдання у різних списках, щоб чітко відслідковувати прогрес.

Acceptance Criteria:

Кожне завдання має чекбокс для перемикання між виконаним і невиконаним.

Коли завдання позначене як виконане, воно переміщується до "Done list".

Коли завдання позначене як невиконане, воно повертається на верх TODO-списку.

"Done list" має окремий заголовок і відображається лише тоді, коли є хоча б одне завершене завдання.

PMN-4 — Видалення завдань

User Story: Як користувач, я хочу видаляти завдання з будь-якого списку, щоб тримати свої TODO актуальними та впорядкованими.

Acceptance Criteria:

Кожне завдання містить кнопку видалення.

Натискання кнопки видалення видаляє завдання зі списку (TODO або Done).

Повинна бути підтвердження дії користувача перед видаленням завдання.
///////////// English

PMN-1 — Basic TODO List

User Story: As a user, I want to view a list of my active tasks and add new ones via an input field, so I can manage what I need to do.

Acceptance Criteria:

There is an input field for entering a new task title.
When the user presses Enter or clicks “Add”, the task is immediately added to the TODO list.
The list of tasks is displayed under the header "TODO list".
Each task displays: • The title of the task
If there are no tasks, the message "No todos yet" is displayed instead of the list.

PMN-2 — Delayed Task Addition

User Story: As a Trump’s secretary, I want new tasks to appear in the list only after a 1-second (configurable) delay, so I can change my mind or prepare the next task.

Acceptance Criteria:

After clicking “Add” or pressing Enter, the task is scheduled to appear in the list after 1 second.
While the task is pending, it is not shown in the list.
Multiple tasks can be scheduled if the user enters them quickly.
There is a button "Cancel" when there is any task is pending
When button "Cancel" is hit all pending tasks are removed from the queue and will not be added
PMN-3 — Marking Tasks as Done and Splitting Lists

User Story: As a user, I want to be able to mark tasks as done or undone, and see active and completed tasks in separate lists, so I can track progress clearly.

Acceptance Criteria: • Each task displays a checkbox to toggle between done and undone. • When a task is marked as done, it moves to the "Done list". • When a task is marked as undone, it moves back to the top of the "TODO list". • The "Done list" has a separate header and only appears when there is at least one completed task.

⸻

PMN-4 — Removing Tasks

User Story: As a user, I want to delete tasks from either list, so I can keep my TODOs relevant and uncluttered.

Acceptance Criteria: • Each task includes a remove/delete button. • Clicking the delete button removes the task from its list (TODO or Done). • There must be a confirmation step when user removes the item.
