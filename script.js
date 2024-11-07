
function grade()
{

    let marks = document.getElementById('marks').value;

    if(parseFloat(marks)>=80)

    {
         document.getElementById('result').innerHTML = "The grade is=A+"
    }

   else if(parseFloat(marks)>=70)

        {
             document.getElementById('result').innerHTML = "The grade is=A"
        }
       
      else if(parseFloat(marks)>=60)

            {
                 document.getElementById('result').innerHTML = "The grade is=A-"
            }

            else if(parseFloat(marks)>=50)

                {
                     document.getElementById('result').innerHTML = "The grade is=B"
                }
            
                else if(parseFloat(marks)>=40)

                    {
                         document.getElementById('result').innerHTML = "The grade is=C"
                    }

                    else if(parseFloat(marks)>=33)

                        {
                             document.getElementById('result').innerHTML = "The grade is=D"
                        }

                        else (parseFloat(marks)<=30)

                            {
                                 document.getElementById('result').innerHTML = "The grade is=F"
                            }
}
