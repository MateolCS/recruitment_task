export type Inputs = {
    name: string;
    preparation_time: string;
    type: string;
    no_of_slices: number;
    diameter: number;
    spiciness_scale: number;
    slices_of_bread: number;
  };


export type Pizza ={
    name: string;
    preparation_time: string;
    type: string;
    diameter: number;
    no_of_slices: number;
}

export type Soup = {
    name: string;
    preparation_time: string;
    type: string;
    spiciness_scale: number;
}

export type Sandwich = {
    name: string;
    preparation_time: string;
    type: string;
    slices_of_bread: number;
}

export type Dish = Pizza | Soup | Sandwich;
