import React from 'react';
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import DisasterButtonCard from '../../components/DisasterButtonCard/DisasterButtonCard'
import CloudsImage from './cloudsBG.jpg'

const InlineStyle = () => (
    <style>
        {`
        .body {
        background-image: url(${CloudsImage});
        background-repeat: no-repeat;
        background-attachment: fixed;
        }
        .header {
            text-align: center;
            background-color: blue;
        }
        .grid:before {
            position: relative;
            background-color: green;

          }
        `}
    </style>
)

const Main = () => {
    return (
        <>
            <InlineStyle />
            <Container text style={{
                backgroundImage: `url(${CloudsImage})`
            }}>
            
                <Header id="headerMainText" as='h1'>World Disaster Informer</Header>
                <Header as='h2'>Follow recent disasters and learn about available jobs</Header>
                <Grid>
                    <Grid.Row>

                        <Grid.Column floated='left' width=
                            {8}>
                            <DisasterButtonCard />
                        </Grid.Column>
                        <Grid.Column floated='right' width={8}>
                            <DisasterButtonCard />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered columns={2}>
                        <Grid.Column>
                            <DisasterButtonCard />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </>
    );
};

export default Main;