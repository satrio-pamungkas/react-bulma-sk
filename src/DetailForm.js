import React from 'react';

export class Processor extends React.Component {
    render() {
        return (
            <div class="columns">
                <div class="column is-one-fifth">
                    <label class="label has-text-left">Processor</label>
                </div>
                <div class="column">
                    <label for="intel" class="radio">
                        <input type="radio" id="intel" name="processor" value="Intel"/>
                        Intel
                    </label>
                    <label for="amd" class="radio">
                        <input type="radio" id="amd" name="processor" value="AMD"/>
                        AMD
                    </label>
                </div>
            </div>
        );
    }
}

export class RAM extends React.Component {
    render() {
        return (
            <div class="columns">
                <div class="column is-one-fifth">
                    <label class="label has-text-left">RAM</label>
                </div>
                <div class="column">
                    <div class="select is-primary">
                        <select name="ram" id="ram">
                            <option value="0">Pilih RAM</option>
                            <option value="1x4GB PC23330">1x4GB PC23330</option>
                            <option value="2x4GB PC23330">2x4GB PC23330</option>
                            <option value="1x8GB PC23330">1x8GB PC23330</option>
                            <option value="2x8GB PC23330">2x8GB PC23330</option>
                            <option value="2x8GB PC25600">2x8GB PC25600</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export class Storage extends React.Component {
    render() {
        return (
            <div class="columns">
                <div class="column is-one-fifth">
                    <label class="label has-text-left">Storage</label>
                </div>
                <div class="column">
                    <label class="checkbox">
                        <input type="checkbox" id="ssd" name="storage[]" value="Solid State Drive"/>
                        Solid State Drive
                    </label>
                    <label lass="checkbox">
                        <input type="checkbox" id="hdd" name="storage[]" value="Hard Disk Drive"/>
                        Hard Disk Drive
                    </label>
                </div>
            </div>
        );
    }
}

export class VGA extends React.Component {
    render() {
        return (
            <div class="columns">
                <div class="column is-one-fifth">
                    <label class="label has-text-left">VGA</label>
                </div>
                <div class="column">
                    <div class="select is-primary">
                        <select name="vga" id="vga">
                            <option value="0">Pilih VGA</option>
                            <option value="NVIDIA GTX 1030 2GB">NVIDIA GTX 1030 2GB</option>
                            <option value="NVIDIA GTX 1050 4GB">NVIDIA GTX 1050 4GB</option>
                            <option value="AMD RX 460 2GB">AMD RX 460 2GB</option>
                            <option value="AMD RX 560 2GB">AMD RX 560 2GB</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export class PSU extends React.Component {
    render() {
        return (
            <div class="columns">
                <div class="column is-one-fifth">
                    <label class="label has-text-left">PSU</label>
                </div>
                <div class="column">
                    <label for="550W" class="radio">
                        <input type="radio" id="550W" name="psu" value="550W"/>
                        550W
                    </label>
                    <label for="750W" class="radio">
                        <input type="radio" id="750W" name="psu" value="750W"/>
                        750W
                    </label>
                    <label for="1000W" class="radio">
                        <input type="radio" id="1000W" name="psu" value="1000W"/>
                        1000W
                    </label>
                </div>
            </div>
        );
    }
}