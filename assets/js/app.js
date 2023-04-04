
/* Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato. FATTOOOOO!!!!
MILESTONE 2
Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista. FATTOOOOOOO!!!!
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */


const { createApp } = Vue

createApp({
  data() {
    return {
      newTask: '',
      error: null,
      toDo: [
        {
            text: 'learn piano',
            done: false
        },
        {
            text: 'learn FlStudio',
            done: true
        },
        {
            text: 'play Re4 Remake',
            done: false
        }
      ]
    }
    
    },
    methods: {
        deleteTask(index){
            console.log('clickkk', this.toDo.index)
            this.toDo.splice(index, 1)
        },
        addTask(){
            console.log('add')
            if (this.newTask.length > 5) {
                this.toDo.unshift(
                {
                    text: this.newTask,
                    done: false
                }
                )
                this.newTask = ''
                this.error = null
            }
            else{
                this.error = 'sorry, you must type at least 5 carachters!'
            }
        },
        invertDone(task){
            /*console.log('clickato', index)
            this.toDo[index].done = !taskDone
            console.log(taskDone, this.toDo[index])*/
            task.done = !task.done;
          
        }
    }
       
  
}).mount('#app')