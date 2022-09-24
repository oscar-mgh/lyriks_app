import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
	reducerPath: 'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
		prepareHeaders: (headers) => {
			headers.set(
				'X-RapidAPI-Key',
				'e2dc150739msh6ee686f9998eed0p14e9b4jsn1027141b6026'
			);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query({
			query: () => '/charts/world',
		}),
		getSongByGenre: builder.query({
			query: (genre) => `/charts/genre-world?genre_code=${genre}`,
		}),
		getSongDetails: builder.query({
			query: ({songid}) => `/tracks/details?track_id=${songid}`,
		}),
		getSongRelated: builder.query({
			query: ({songid}) => `/tracks/related?track_id=${songid}`,
		}),
		getArtistDetails: builder.query({
			query: (artistId) => `/artists/details?artist_id=${artistId}`,
		}),
		getSongsByCountry: builder.query({
			query: (countryCode) =>
				`/charts/country?country_code=${countryCode}`,
		}),
		getSongsBySearch: builder.query({
			query: (searchTerm) =>
				`/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
		}),
	}),
});

export const {
	useGetTopChartsQuery,
	useGetSongByGenreQuery,
	useGetSongDetailsQuery,
	useGetSongRelatedQuery,
	useGetArtistDetailsQuery,
	useGetSongsByCountryQuery,
	useGetSongsBySearchQuery,
} = shazamCoreApi;
