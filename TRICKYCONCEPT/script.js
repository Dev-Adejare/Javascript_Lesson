

//Global Scope

const name = "Ade"
const age = 17;
const school = "Agege Primary School, Orile";


const one = () => {
    return`${name} of ${age} years of age, attended ${school}`
}
const answer = one()
    console.log(answer)


    const file = () => {
        return`${name} likes eating ${age} wraps of semo in ${school}`;
    }

    const sentence = file();
    console.log(sentence)


    //Local Scope

    const localScope = () => {
        const name = "Oloye Pupo";
        const religion = "Muslim";
        const activity = "Drinking of Wine";

        return `${name} who is a ${religion} enjoys ${activity}`;
    }

    const oloye = localScope()
    console.log(oloye)


