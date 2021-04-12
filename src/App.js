import React from 'react';
import { Name, Email, Address } from './IdentityForm';
import { Processor, RAM, Storage, VGA, PSU } from './DetailForm';
import Button from './ButtonForm';

class FormBox extends React.Component {
    render() {
        return (
            <section class="section has-background-primary-light">
                <div class="container">
                    <div class="column is-three-fifths is-offset-one-fifth">
                        <h1 class="title has-text-centered has-text-primary-dark is-size-2">Spasi Komputer</h1>
                        <p class="has-text-centered">Spasi komputer menjual kebutuhan elektronik seperti Notebook, Komputer PC Rakitan
                            Processor, VGA, RAM termurah dan terlengkap di Cibiru
                        </p>
                        <br/>
                        <form action="" method="POST" class="box">
                            <h2 class="title hax-text-centered is-size-5 has-text-primary-dark">Identitas</h2>
                                <Name/>
                                <Email/>
                                <Address/>
                            <hr/>
                            <h2 class="title hax-text-centered is-size-5 has-text-primary-dark">Perangkat Komputer</h2>
                                <Processor/>
                                <RAM/>
                                <Storage/>
                                <Email/>
                                <VGA/>
                                <PSU/>
                            <hr/>
                                <Button/>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default FormBox;

