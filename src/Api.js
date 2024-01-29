const Words= async() =>{
 try {
    const response = await fetch('https://challenge.trio.dev/api/v1/wordle-words')
    const data = await response.json();
    return data;
 } catch (error) {
    console.error("Error getting words from API", error);
    return[];
 }
}

export default Words;


