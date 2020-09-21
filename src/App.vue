<template>
  <div id="app">
   <h1> Date Range </h1>
<v-date-picker
  mode='range'
  v-model='range'
 is-inline
  />  

<h1> Week Dates </h1>
<v-date-picker
  mode='multiple'
  v-model='myDates' is-inline
> 
</v-date-picker>
  </div>
</template>

<script>


export default {
  name: 'App',
   
   data() {
    return {
      range: {
        start: null,
        end: null   // Jan 19th, 2018
      }, 

        myDates: [
        
      ]
    }
  }, 
   beforeUpdate: function () {
 if(this.myDates[0] !== undefined)
{

var choosedDay = this.myDates[0].getDay(); 
var choosedDate = this.myDates[0]
var daysInMonth= new Date(choosedDate.getFullYear(), choosedDate.getMonth()+1, 0).getDate() 
var allMonthDays= []; 
for(var i=1; i<=daysInMonth; i++){

allMonthDays.push(new Date(choosedDate.setDate(i)))


}
 this.myDates = [];
 for(var j=0; j<allMonthDays.length; j++){
   console.log(allMonthDays[j].getDate())

   if(choosedDay===allMonthDays[j].getDay()){
     this.myDates.push(allMonthDays[j])
   }
   
 }
console.log(choosedDay); 
 
}
}
}
</script>

