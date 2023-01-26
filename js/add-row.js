const addButton = document.querySelector('.page-form__button--add');
const deleteButton = document.querySelector('.page-content__row-button');
const addRow = () => {
  const tbody = document.querySelector('tbody');
  const nameField = `<label aria-label="Введите ФИО сотрудника">
    <input type="text" name="name" class="page-content__name" minlength="1"></label>`
  const positionField = `<label aria-label="Укажите должность сотрудника">
    <select name="position">
      <option value="Аналитик">Аналитик</option>
      <option value="Менеджер" selected>Менеджер</option>
      <option value="Программист">Программист</option>
      <option value="Юрист">Юрист</option>
    </select></label>`
  const ageField = `<label aria-label="Укажите возраст сотрудника">
    <input type="number" name="age" min="14" max="110"></label>`;
  const competenceField = `<label aria-label="Укажите необходимые компетенции">
    <textarea cols="30" rows="5" name="competence"></textarea></label>`;
  const removeButton = `<button class="page-content__row-button" title="Удалить строку" type="button"
                           onClick="this.closest('tr').remove()">-</button>`

  let row = tbody.insertRow();
  row.innerHTML = `<td>${nameField}</td><td>${positionField}</td><td>${ageField}</td><td>${competenceField}</td>
  <td>${removeButton}</td>`;
}

addButton.addEventListener('click', addRow);

deleteButton.addEventListener("click", function() {
  this.closest('tr').remove()
});
