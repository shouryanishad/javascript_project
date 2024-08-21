const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputfields = document.querySelectorAll('.goal-input')
const errorlabel = document.querySelector('.error-label')
const progressbar = document.querySelector('.progress-bar')
const progreessvalue = document.querySelector('.progress-value')



checkBoxList.forEach(( checkbox) => checkbox.addEventListener(( 'click',(e) => {
    const allGoalsAdded = [...inputfields].every(function(input){
        return input.value
    })

    if (allGoalsAdded){
        checkbox.parentElement.classList.toggle('completed')
        progreessvalue.computedStyleMap.map = '33.33%'}
        else{
            progressbar.classList.add('show-error')
        }
    })
))



inputfields.forEach((input) => {
    input.addEventListener('focus', () => {
        progressbar.classList.remove('show-error')
    })
})