import Algorithm from '@/components/layouts/Algorithm'


export default function Map() {

    return (
        <Algorithm
            title='Stolen Bikes'
            description={`In this exercise, the goal was to take a set of data as the basis for visualization. We were allowed to choose a data set from numerous databases and APIs to feed into our algorithm. I ultimately decided to use a dataset that included records of bicycle thefts in Berlin.
            Maintaining the theme, I visualized the data in the form of bicycle wheels. I compared the number of stolen women's bikes versus men's bikes. Reports of particularly serious burglaries I have represented with red spokes to visualize the relation to all thefts.`}
            github=''
            sketch='https://loading-a-json-file-exercise-bike-thefts-dimitribalzer.viscoders2223.repl.co'
            code='/bikes-code.jpg'
            tooltip='Click on the field above and use your arrow key to switch between different days'
        />
    )
}