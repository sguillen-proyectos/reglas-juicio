<?php
class RuleSetSeeder extends Seeder {
    public function run(){
        RuleSet::create(array(
            'name'=>'Rule X',
            'descriptors'=>'[]',
            'entities'=>'[]'
        ));
    }
}
