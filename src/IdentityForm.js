import React from 'react';

export class Name extends React.Component {
    render() {
        return (
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label has-text-left">Nama</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <p class="control">
                        <input class="input is-primary" type="text" placeholder="Masukan nama" name="nama"/>
                    </p>
                    </div>
                </div>
            </div>
        );
    }
}

export class Email extends React.Component {
    render() {
        return (
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label has-text-left">Email</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <p class="control">
                        <input class="input is-primary" type="email" placeholder="Masukan surel" name="email"/>
                    </p>
                    </div>
                </div>
            </div>
        );
    }
}

export class Address extends React.Component {
    render() {
        return (
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label has-text-left">Alamat</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <p class="control">
                        <input class="input is-primary" type="text" placeholder="Masukan alamat" name="alamat"/>
                    </p>
                    </div>
                </div>
            </div>
        );
    }
}