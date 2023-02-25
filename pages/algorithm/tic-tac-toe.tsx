import Algorithm from '@/components/layouts/Algorithm'


export default function Map() {

    return (
        <Algorithm
            title='Tic Tac Toe'
            description={`To challenge the creativity in the course a bit, one of our assignments was to re-visualize the classic Tic Tac Toe game. The focus was mainly on the presentation and less on the logic and interaction.
            I decided to break up the rigid shapes from the game and focus on organic shapes instead. The challenge was to design an algorithm that would generate random "blobs" and distribute them across the field. This formed the background for the playing field. 
            As a further step, I programmed a simple logic to fill in the playing fields. For this, I reverted to the algorithm to generate blobs for each player that differ in color.`}
            github='https://github.com/balzerdi/visualcoding/tree/main/public/sketches/tic%20tac%20toe'
            sketch='https://tic-tac-toe-dimitribalzer.viscoders2223.repl.co'
            code='/tic-code.jpg'
            tooltip='Click on the field to play the game!'
        />
    )
}