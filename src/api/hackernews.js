/**
 *
 * @param ids
 * @returns {Promise<(any|any|any|any|any|any|any|any|any|any)[]>}
 */
export function getComments(ids) {
  return this.fetchAllComments(ids);
}

/**
 *
 * @param ids
 * @returns {Promise<[any , any , any , any , any , any , any , any , any , any]>}
 */
export function fetchAllComments(ids) {
  let comments = [];
  return Promise.all(ids.map(id => {
    return fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
      .then(resp => {
        return resp.json().then(result => {
            comments.push(result);
        })
      })
  }))
    .then(() => {
      return comments;
    });
}


/**
 * API getTopStories
 * Returns an array of Story data objects containing title and kids (comments)
 *
 * @method geetTopStories
 * @param resultsNum
 * @returns {Promise<{title: string, kids: *[], any: *}[]>}
 */
export function getTopStories(resultsNum) {
  return this.getIds(resultsNum)
    .then(topStoryIds => this.getTopStoriesFromIds(topStoryIds));
}

/**
 * Do a fetch for topStories
 * nb: treat as private exposed publicly for tests
 *
 * @method getIds
 * @private
 * @param resultsNum
 * @returns {Promise<Response>}
 */
export function getIds(resultsNum) {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(results =>  {
      return results.json();
    })
    .then(data => {
      return data.slice(0, resultsNum);
    });
}

/**
 * Do a fetch on all Story URLS based on input IDs array
 * nb: treat as private exposed publicly for tests
 *
 * @method getTopStoriesFromIds
 * @private
 * @param ids
 * @returns {Promise<[]>}
 */
export function getTopStoriesFromIds(ids) {
  let topStories = [];
  return Promise.all(ids.map(id => {
    return fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
      .then(resp => {
        return resp.json().then((result) => {
          topStories.push(result);
        });
      })
  }))
    .then(() => {
      return topStories;
    });
}