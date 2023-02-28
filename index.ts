let input_tune: string | RegExpMatchArray | undefined = "A2E9B0F1D3F1G6B0"
let target_tune: string | RegExpMatchArray | undefined = "B0G7F6B2"

input_tune = input_tune?.match(/.{1,2}/g)?.sort()
target_tune = target_tune?.match(/.{1,2}/g)?.sort()

const note_simularity = (input, target) => {
    let simularity: Array<number> = []
    for(let i = 0; i < target.length; i++) {
        for(let j = 0; j < input.length; j++) {
            if(target[i].substring(0,1) === input[j].substring(0,1)) {
                if(target[i].substring(1,2) === input[j].substring(1,2)) {
                    simularity.push(2)
                } else {
                    simularity.push(1)
                }
            } else {
                simularity.push(0)
            }
        }
    }
    return simularity
}

const calculate_simularity = (input, target) => {
    const total_notes = input.length + target.length
    const matching_notes = note_simularity(input, target).filter(note => note === 1).length
    const matching_pitch = note_simularity(input, target).filter(note => note === 2).length
    const non_matching_notes = note_simularity(input, target).filter(note => note === 0).length

    return (matching_notes / total_notes) + matching_pitch - non_matching_notes
}

console.log(calculate_simularity(input_tune, target_tune))