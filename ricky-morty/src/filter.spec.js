const filter = require('./filter');
const data = require('./data/data.json');

describe('filter', () => {
    describe('status', () => {
        it('return just alive', () => {
            const response = filter.filterByStatus(data.results, "Alive");
            expect(response.length).toBe(8);
        });

        it('return just dead', () => {
            const response = filter.filterByStatus(data.results, "Dead");
            expect(response.length).toBe(6);
        });

        it('return just unknown', () => {
            const response = filter.filterByStatus(data.results, "unknown");
            expect(response.length).toBe(6);
        });
    });

    describe('sex', () => {
        it('return just mans', () => {
            const response = filter.filterByGender(data.results, 'Male');
            expect(response.length).toBe(15);
        });

        it('return just womans', () => {
            const response = filter.filterByGender(data.results, 'Female');
            expect(response.length).toBe(4);
        });
    })

    describe('episode', () =>  {
        it('return epsode 6 from url', () => {
            const url = "https://rickandmortyapi.com/api/episode/6";
            expect(filter.getEpisodeFromURL(url)).toBe("6");
        });

        it('return array episode', () => {
            const character = data.results[6];
            expect(character.name).toBe("Abradolf Lincler");
            expect(filter.generateEpisodeList(character)).toEqual(["10", "11"]);
        });

        it('return array episode', () => {
            const character = data.results[6];
            const ricky = data.results[0];
            const episodes = {
                "10": [ricky],
                "11": [ricky]
            }
            const response = filter.mapCharacterToEpisodes(episodes, character);
            expect(response["10"].length).toBe(2);
            expect(response["10"][1].name).toBe(character.name);


            expect(character.name).toBe("Abradolf Lincler");
            expect(filter.generateEpisodeList(character)).toEqual(["10", "11"]);
        });

        it('return just rick and morty episode 1', () => {
            const response = filter.filterByEpisode(data.results, 1);
            expect(response.length).toBe(2);
            expect(response[1].name).toBe("Morty Smith");
        });
    });
});