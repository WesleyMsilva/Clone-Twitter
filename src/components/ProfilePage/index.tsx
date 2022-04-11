import React from 'react';

import Feed from '../Feed';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage, 
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
                
                <h1>Wesley Mendonça</h1>
                <h2>@WesleyMsilva</h2>

                <p>
                    Developer at <a href="http://rockeatseat.com.br">@Rockeatseat</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nacido(a) em 05 de fevereiro de 1999
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>94 </strong>
                    </span>
                    <span>
                        <strong>672 </strong> seguidores 
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    )
}

export default ProfilePage;