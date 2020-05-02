function filterByStatus(characters, status) {
    return characters.filter(characters => characters.status == status);
}

function filterByGender(characters, gender) {
    return characters.filter(characters => characters.gender == gender);
}

function getEpisodeFromURL(url) {
    const urlSplited = url.split("/");
    return urlSplited[urlSplited.length - 1];
  }

function generateEpisodeList(character) {
    return character.episode.map(url => getEpisodeFromURL(url));
}

function mapCharacterToEpisodes(episodes, character) {
    const characterEpisodes = generateEpisodeList(character);

    let newEpisodes = { ...episodes };

    characterEpisodes.map(episode => {
        if (newEpisodes[episode]) {
            newEpisodes = {
                ...newEpisodes,
                [episode]: [...newEpisodes[episode], character]
            };
            return;
        }

        newEpisodes[episode] = [character];
    });

    return newEpisodes;
}

function filterByEpisode(personagens, episode) {
    const episodios = personagens.reduce((episodes, character) => {
        return mapCharacterToEpisodes(episodes, character);
    }, {});
    return episodios[episode];
}

module.exports = {
    filterByStatus,
    filterByGender,
    filterByEpisode,
    getEpisodeFromURL,
    generateEpisodeList,
    mapCharacterToEpisodes
};