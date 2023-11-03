#!/bin/bash

# Defina um dicionário para mapear a escolha do usuário para as variáveis da API
declare -A api_mapping
api_mapping[1]="LNBits"
api_mapping[2]="Alby"
api_mapping[3]="Custom"

# Função para exibir o menu
display_menu() {
  clear
  echo "Select the lightning wallet api :"
  
  local i=1
  while [[ $i -le ${#api_mapping[@]} ]]; do
    echo "$i) ${api_mapping[$i]}"
    ((i++))
  done
  
  echo "4) Sair"
}

# Função para lidar com a escolha do usuário
handle_choice() {
  read -p "Escolha uma opção: " choice
  case $choice in
    1)
        selected_api="${api_mapping[$choice]}"
        echo "You selected $selected_api"
        read -p "Digite o hash da sua carteira LNBits: " wallet_hash
        export WALLET_HASH=$wallet_hash
        echo "O hash da sua carteira foi salvo como uma variável de ambiente."

        npm run dev
        ;;
    
    2)
        selected_api="${api_mapping[$choice]}"
        echo "You selected $selected_api"
        read -p "Digite o hash da sua carteira Alby: " wallet_hash
        export WALLET_HASH=$wallet_hash
        echo "O hash da sua carteira foi salvo como uma variável de ambiente."

        node alby.js
        ;;
    3)
        selected_api="${api_mapping[$choice]}"
        echo "You selected $selected_api"
        read -p "Digite o hash da sua carteira Custom: " wallet_hash
        export WALLET_HASH=$wallet_hash
        echo "O hash da sua carteira foi salvo como uma variável de ambiente."
        ;;
    4)
        echo "Exiting..."
        exit
        ;;
    *)
      echo "Invalid Option. Try Again!"
      ;;
  esac

}

# Loop para exibir o menu e lidar com as escolhas do usuário
while true; do
  display_menu
  handle_choice
  read -p "Press Enter ..."
done
