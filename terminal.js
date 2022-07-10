$('body').terminal({
    help: function() {
        this.echo('Navigate through the website by using these commands : \n'+' whoami ---  discover the webpage developer \n'+' clear --- clear the page \n'
        +' projects --- what projects have I done \n'+' reachme --- social links where you can reach me \n'+' minigame --- test your skills in a mini ctf and get the chance to enter my super secret room\n');
    },
    whoami: function() {
        this.echo('ICT engineering student and a cloud security engineer wannabe \n'+
        'CTF player \n'+
        
        'Passionate about Ethical Hacking and Penetration Testing \n');},
    projects:function() {

        this.echo('Projects are underway ...... please check my github page ')
    },
    clear: true,
   
    reachme:function(){
        var result = "https://www.linkedin.com/in/mohamed-aziz-el-fadhel-b85431233/";
        var result2 = "https://tryhackme.com/p/MoFahdel";
        var result3 = "https://github.com/MohamedAzizFadhel";
        var result4 = "mohamedaziz.elfadhel@etudiant-enit.utm.tn";
        this.echo('Linkedin - '+result+'\n'+'TryHackMe - '+result2+'\n'+'Github - '+result3+'\n'+'Email - '+result4);
        
    },
    minigame:function(){
        this.echo('Get the three flags and add them to make a super dupper flag that takes you to my secret room ---- good luck \n'+
        ' Flag 1 :   CmZsYWdfaXNfTDN0Xw==   \n'
        +' Flag 2 :    4d 33 5f  \n'
        +' Flag 3 :   `???? ');
    },
    flag_is_L3t_M3_1nnnn:function(){

        this.echo("YOU MADE IT THROUGH \n"+
        "ENTER THE MATRIX ");
        
        setTimeout(() => {  window.location.replace("./site/secret.html"); }, 5000);
        
},prompt: 'Terminal> ',
}, 

{
    greetings: 'Welcome to my webpage portfolio --- for more info type help'
});
