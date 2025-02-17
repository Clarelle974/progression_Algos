// Description:
// You are a hollywood agent who has several high profile stars to manage. Because of your high reputation and the quality of your actors, you receive tons of different offers.

// Each offer specifies the name of the movie, the start date and the end date of filming. For simplicity, in this kata all dates are just integers and follow the natural order. This means that a movie with start date of 15 starts before a movie with start date of 18 for example.

// Because these offers are coming from different studios, some of them may overlap on their starting and ending dates. Since they film the entire day, an actor can never work on two overlapping movies at the same time.

// Your actors are willing to work on any of those movies because they all pay the same. Your job as their agent is to make sure that they work on as many films as possible to maximize their earnings and, in turn, yours.

// Write a function 'schedule' that takes an array of movies and returns the maximum amount of movies that an actor could take considering that he can not work on two overlapping movies.

// You already have the following function to represent the movie information:

// function Movie(name,start,end) {
//   this.name = name;
//   this.start = start;
//   this.end = end;
// }
// You can assume that all input values are valid. That is, every movie has a 'start' and 'end' and the former is always smaller than the latter.

// For instance, given the movies:

// Java Joe => start 0, end 60
// Looking for Clojure => start 1, end 5
// I C You => start 6, end 10
// Ruby Park => start 11, end 14
// The first movies overlaps with the remaining ones. The function should return 3 because the best option would be for the actor to work on the last three films.

// The function should return 0 if no movies are passed and 1 if only one movie is present.

function schedule(movies) {
	if (movies.length === 0) {
		return 0;
	}
	let optimal = 0;
	for (let i = 0; i < movies.length; i++) {
		let count = 1;
		let start = movies[i].start;
		let end = movies[i].end;
		for (let j = 0; j < movies.length; j++) {
			if (start > movies[j].end) {
				count += 1;
				start = movies[j].start;
			}
			if (end < movies[j].start) {
				count += 1;
				end = movies[j].end;
			}
		}
		if (count > optimal) {
			optimal = count;
		}
	}
	return optimal;
}
