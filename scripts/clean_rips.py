"""
@title

@description

"""
import argparse
import re
from pathlib import Path

DEL_FNAMES = [
    'WWW.YIFY-TORRENTS.COM.jpg',
]

REG_YEAR = r'\([12][0-9]{3}\)'


def is_movie(test_dir):
    mov_name = test_dir.stem
    mov_name = re.split(REG_YEAR, mov_name)[0]
    mov_name = mov_name.strip()

    test_fnames = [each_file.stem.replace('.', ' ') for each_file in test_dir.glob('*') if each_file.is_file()]
    name_match = [str(each_fname).startswith(mov_name) for each_fname in test_fnames]
    is_valid = mov_name if any(name_match) else None
    return is_valid


def format_movie(movie_dir):
    return


def move_movie(movie_dir, destination_dir):
    # possible that the existing directory already exists
    # this movie is either a different format or a copy
    # if it is a copy, discard it
    # if it is a different format, keep with format tag
    #   might want to always include format tag anyways, makes it easier to parse when to discard/keep existing movie
    return


def is_show(test_dir):
    return False


def format_show(show_dir):
    return


def move_show(show_dir, destination_dir):
    return


def main(main_args):
    media_dir = Path('C:\\', 'Users', 'a', 'Documents', 'media')
    movies_dest_dir = Path('C:\\', 'Users', 'a', 'Documents', 'media', 'movies')
    shows_dest_dir = Path('C:\\', 'Users', 'a', 'Documents', 'media', 'shows')

    finished_dir = Path(media_dir, 'finished')
    for each_dir in finished_dir.iterdir():
        if not each_dir.is_dir():
            print(f'Not a directory:\n\t{each_dir}\n')
            continue

        movie_name = is_movie(each_dir)
        if not movie_name:
            print(f'Not a movie:\n\t{each_dir}\n')
            continue

        print(f'Found movie:\n\t{movie_name}\n\t{each_dir}\n')
        format_movie(each_dir)
        move_movie(each_dir, movies_dest_dir)
    return


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='')

    args = parser.parse_args()
    main(vars(args))
