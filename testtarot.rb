# on a un jeu de 22 cartes correspondant aux 22 arcanes
arcanes_majeurs = ["Le Bateleur", "La Papesse", "L'Impératrice", "L'Empereur","Le Pape", "L'Amoureux", "Le Chariot", "La Justice","L'Ermite", "La Roue de Fortune", "La Force", "Le Pendu", "L'Arcane sans nom/ La Mort","Tempérance", "Le Diable", "Maison Dieu", "L'Etoile", "La Lune", "Le Soleil","Le Jugement", "Le Monde", "Le Mat"]

# on stocke les differents textes que l'on va afficher a la fin
# en fonction du tirage + des choix du user

textes_arcanes = {
  "Le Bateleur" => ["batetexte1", "batetexte2", "texte3", "texte4"],
  "La Papesse" => ["papestexte1", "texte2", "texte3", "texte4"],
  "L'Impératrice" => ["impertexte1", "texte2", "texte3", "texte4"],
  "L'Empereur" => ["empereurtexte1", "texte2", "texte3", "texte4"],
  "Le Pape" => ["papetexte1", "texte2", "texte3", "texte4"],
  "L'Amoureux" => ["texte1", "texte2", "texte3", "texte4"],
  "Le Chariot" => ["papetexte1", "texte2", "texte3", "texte4"],
  "La Justice" => ["papetexte1", "texte2", "texte3", "texte4"],
  "L'Ermite" => ["papetexte1", "texte2", "texte3", "texte4"],
  "La Roue de Fortune" => ["papetexte1", "texte2", "texte3", "texte4"],
  "Le Pendu" => ["papetexte1", "texte2", "texte3", "texte4"],
  "L'Arcane sans nom/ La Mort" => ["papetexte1", "texte2", "texte3", "texte4"],
  "Tempérance" => ["papetexte1", "texte2", "texte3", "texte4"],
  "Maison Dieu" => ["papetexte1", "texte2", "texte3", "texte4"],
  "L'Etoile" => ["papetexte1", "texte2", "texte3", "texte4"],
  "La Lune" => ["papetexte1", "texte2", "texte3", "texte4"],
  "Le Soleil" => ["papetexte1", "texte2", "texte3", "texte4"],
  "Le Jugement" => ["papetexte1", "texte2", "texte3", "texte4"],
  "Le Monde" => ["papetexte1", "texte2", "texte3", "texte4"],
  "Le Mat" => ["papetexte1", "texte2", "texte3", "texte4"],
}


# lutilisateur peut  "melanger les cartes" via un bouton
arcanes_majeurs_mix = arcanes_majeurs.shuffle

# lutilisateur clique sur 10 cartes au hasard pr les choisir
# (lordi les choisit) pour lui au hasard
# les cartes s'affichent une à une

set_de_dix_cartes = []
  for i in (1..10)
  carte_i = arcanes_majeurs_mix.sample
  set_de_dix_cartes << carte_i
  end

# on affiche le set de 10 cartes

p set_de_dix_cartes

# on va maintenant demander a lutilisateur plusieurs actions
# parmi ces 10 cartes du set :
# choisir 3 cartes pour ses qualites, 3 pour ses defauts, 3 pour son jugement de l'avenir

#  3 cartes pour ses qualites :

trois_qualites_choisies = []
puts "Cher consultant, choisis parmi ces dix cartes, 3 qui représentent tes qualités"
p set_de_dix_cartes

for i in (1..3)
puts "Qualité #{i}"
qualite_i = gets.chomp
  if set_de_dix_cartes.include?(qualite_i)
  set_de_dix_cartes.delete(qualite_i) # on oublie pas quune fois la carte choisie elle ne pourra plus letre
  else
    puts "Cette arcane n'est pas dans le set des 10 cartes, choisis en une autre"
  qualite_i = gets.chomp
  end
  trois_qualites_choisies << qualite_i
end


puts "Tableau des 3 qualités :"
p trois_qualites_choisies
puts "Il reste donc à choisir parmi les 7 cartes suivantes :"
p set_de_dix_cartes
puts "---------------------------------------------------"

#  3 cartes pour ses defauts :
# attention, les trois cartes precedentes ne peuvent plus etre choisies
# on exclut donc du tableau les 3 valeurs precedemment choisis (grace a la ligne 36)

trois_defauts_choisis = []
puts "Cher consultant, choisis parmi ces 7 cartes, 3 qui représentent tes défauts"
p set_de_dix_cartes

for i in (1..3)
puts "Defaut #{i}"
defaut_i = gets.chomp
  if set_de_dix_cartes.include?(defaut_i)
   set_de_dix_cartes.delete(defaut_i)
  else
    puts "Cette arcane n'est pas dans le set des cartes, choisis en une autre"
  defaut_i = gets.chomp
  end
trois_defauts_choisis << defaut_i
end

puts "Tableau des 3 defauts :"
p trois_defauts_choisis
puts "Il reste donc à choisir parmi les 4 cartes suivantes :"
p set_de_dix_cartes
puts "---------------------------------------------------"

#  3 cartes pour l'avenir :

trois_avenirs_choisis = []
puts "Cher consultant, choisis parmi ses dix cartes, 3 qui représentent tes qualités"
p set_de_dix_cartes

for i in (1..3)
puts "Avenir #{i}"
avenir_i = gets.chomp
  if set_de_dix_cartes.include?(avenir_i)
  set_de_dix_cartes.delete(avenir_i)
  else
    puts "Cette arcane n'est pas dans le set des cartes, choisis en une autre"
    avenir_i = gets.chomp
  end
trois_avenirs_choisis << avenir_i
end

puts "Tableau des 3 avenirs :"
p trois_avenirs_choisis
puts "Il ne reste qu'une seule carte :"
p derniere_carte = set_de_dix_cartes
puts "---------------------------------------------------"

# on a store du texte ligne 7 pour chaque arcane, 4 textes pour chacune, selon que cela soit
# pour une qualite, pour un defaut ou pour la vision de lavenir
# ou la derniere carte du set

p trois_qualites_choisies
p trois_defauts_choisis
p trois_avenirs_choisis
p derniere_carte
puts "---------------------------------------------------"

tableau_texte_qualite = []
trois_qualites_choisies.each do |element|
tableau_texte_qualite << textes_arcanes[element][0]
end

p tableau_texte_qualite.join(". ")

tableau_texte_defaut = []
trois_defauts_choisis.each do |element|
tableau_texte_defaut << textes_arcanes[element][1]
end

p tableau_texte_defaut.join(". ")

tableau_texte_avenir = []
trois_avenirs_choisis.each do |element|
tableau_texte_avenir << textes_arcanes[element][2]
end

p tableau_texte_avenir.join(". ")

tableau_texte_dernierecarte = []
tableau_texte_dernierecarte << textes_arcanes[element][3]

p tableau_texte_dernierecarte.join(". ")
