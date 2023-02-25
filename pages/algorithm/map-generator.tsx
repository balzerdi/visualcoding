import Algorithm from '@/components/layouts/Algorithm'


export default function Map() {

    return (
        <Algorithm
            title='Map Generator'
            description='Das Ziel dieser Übung bestand darin, sich mit dem Perlin Noise Algorithmus vertraut zu machen. Anders als Standard random() Funktionen von JavaScript erstellt der Perlin Noise Algorithmus zufällige Werte in einem Vektor oder einer Matrix, die relativ zu ihren direkten Nachbarn sind. Dadurch entstehen nicht nur wirre Zahlenfolgen, sondern erkennbare Muster. Diese Muster wiederum kann man verwenden, um zufällige, natürliche Muster zu kreieren.
            
            The goal of this exercise was to become familiar with the Perlin Noise algorithm. Unlike standard JavaScript random() functions, the Perlin Noise algorithm creates random values in a vector or matrix that are relative to their immediate neighbors. This results in recognizable patterns rather than just jumbled sequences of numbers. These patterns, in turn, can be used to create random, natural patterns. 
I use these natural patterns to generate maps. On a two-dimensional plane, each point is given a random value between 0 and 1. I can then assign this value to a particular type of terrain, be it water, meadow, hill, or mountain. With a little trial and error, you get beautiful maps with different settings that invite you to fantasize and dream.'
            github='https://github.com/balzerdi/visualcoding/blob/48aee03fe44a8361ee6e2488ab21a7162d95350a/public/sketches/map.js'
            sketch='https://perlin-noise-with-additional-application-dimitribalzer.viscoders2223.repl.co'
            code='/map-code.jpg'
            tooltip='Reload the page to get a new map!'
        />
    )
}