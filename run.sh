#!/bin/bash

# Run Django and React

yarn --cwd ./protein-react/protein-search/ start & python3 ./dna_protein/manage.py runserver && fg
