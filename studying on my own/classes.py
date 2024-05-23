class animes:
    def __init__(self, release_date, rating, seasons):
        self.realease_date = release_date
        self.rating = rating
        self.seasons = seasons

jjk = animes(2020, 8.6, f'2 seasons and 1 movie')     
naruto = animes(2002, 8.3, f'2 seasons and 11 movie')     

print(f'naruto was released in {naruto.realease_date}')
print(f'narutos rating on IMDb is {naruto.rating}')
print(f'jjk has total of {jjk.seasons}')
print(f'jujutsukaisens rating on IMDb is {jjk.rating}')

      



