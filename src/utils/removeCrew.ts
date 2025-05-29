const removeCrew = (id : string) => {
    
    const card = document.getElementById(id);
    card?.remove();

}

export default removeCrew;