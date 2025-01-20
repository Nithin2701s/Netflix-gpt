export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/original'
export const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/embed/'
export const TMDB_MOVIE_LIST_URL = 'https://api.themoviedb.org/3/'
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_BEARER_TOKEN
  }
};

export const langConfig = [
  {
    id: 'en',
    name: 'English'
  },
  {
    id: 'hin',
    name: 'हिन्दी'
  },
  {
    id: 'spa',
    name: 'español'
  },
  {
    id: 'tel',
    name: 'తెలుగు'
  }
]

export const lang = {
  "en": {
    gptPlaceholder: "What do you like to watch today?",
    search: 'Search',
    homepage: 'Home',
    signout: 'Sign out'
  },
  "hin": {
    gptPlaceholder: 'आज आप क्या देखना पसंद करते हैं?',
    search: 'खोज',
    homepage: 'मुखपृष्ठ',
    signout: 'साइन आउट'
  },
  'spa': {
    gptPlaceholder: '¿Qué te gusta ver hoy?',
    search: 'buscar',
    homepage: 'página principal',
    signout: 'desconectar'
  },
  'tel': {
    gptPlaceholder: 'మీరు ఈరోజు ఏమి చూడాలనుకుంటున్నారు?',
    search: 'శోధించు',
    homepage: 'హోమ్‌పేజీ',
    signout: 'సైన్అవుట్'
  }
}

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY