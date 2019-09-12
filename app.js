new Vue({
    el: '#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning: false
    },
    methods:{
        play : function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth=100;
        },

        attack : function(){
            this.monsterHealth -= this.calculateDamage(3,10);
            this.playerHealth -= this.calculateDamage(5,12);
            if (this.checkWin())
            {
                return;
            }

        },
        
        heal : function(){
            if (this.playerHealth <= 90)
            {
                this.playerHealth +=10;
            }
            
        },

        
        giveUp : function(){
            this.gameIsRunning=false;
        },
        calculateDamage: function(min , max){
            return Math.max(Math.floor(Math.random()*max) + 1 , min);
        },

        checkWin : function(){
            if(this.monsterHealth<=0)
            {
                if(confirm('You have won the game. New Game?'))
                {
                    this.play();
                }
                else{
                    this.gameIsRunning=false;
                }
                return true;

            }
            else if(this.playerHealth<=0){
                if(confirm('You have lost the game. New Game?'))
                {
                    this.play();
                }
                else{
                    this.gameIsRunning=false;
                }
                return true;

            }
        }
    }

});