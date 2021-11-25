
export default class Win extends Phaser.Scene {
    /**
     * Constructor del menu
     */
    constructor() {
      super({ key: 'win' });
      this.runTime=0;
    }
    init(data)  //Data se pasa como un objeto construido cuando pasas de escena con los parametros que tu eligas
    {
        this.runTime=data.runT;
        console.log(this.runTime);
      
    }

    create() {

        this.winBackGround = this.add.image(this.scale.width*0.5, this.scale.height*0.5, 'gameoverbackground').setScale(2, 2).setScrollFactor(0);
        
        this.text=this.add.text(370,180,"¡YOUR TIME!")
        this.text.setAlign('center');
        // Font style
        this.text.setFont('Arial Black');
        this.text.setFontSize(40);

        this.text1=this.add.text(450,230,this.runTime)
        this.text1.setAlign('center');
        // Font style
        this.text1.setFont('Arial Black');
        this.text1.setFontSize(40);
        
        this.spriteWin = this.add.image(495, 100, 'youWin').setScale(0.8, 0.8);

        this.playButton = this.add.image(495, 400, 'playButton').setInteractive();
        this.playButton.on('pointerdown', () => {this.scene.start('level')});

        this.exitButton = this.add.image(495, 500, 'exitButton').setInteractive();
        this.exitButton.on('pointerdown', () => {this.scene.start('menu')})
    }
}