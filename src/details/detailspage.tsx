import React, { useLayoutEffect, useState } from 'react'
import { Store, AppDispatch } from '../reduxstore';
import { State, rawItems, Item, TagAptCon, rawTagAptCons, rawTags, Tag, AptImg, rawAptImgs } from '../interfaces/interfaces'
import { useSelector } from 'react-redux';
import ImageCarousel from '../components/imgcarousel';
import ImageBrowser from '../components/imgbrowser'
var _ = require('lodash');

export default function detailspage() {
    //state for images for the given item (apt)
    const [imgs, setImgs] = useState<AptImg[]>([]);

    const searchParams = new URLSearchParams(window.location.search);
    const myParam = searchParams.get('id');

    const state: State = useSelector((state: any) => state);

    const apts: Item[] = state.items;

    const apt: Item = findAptWithId(apts, myParam);

    if (apt === undefined) {
        console.log('invalid term');
    } 

    console.log(imgs);

    //typed objects used in the component
    let itemTags: Tag[] = [];
    let itemTagIds: number[] = [];

    //find apt with get parameter ID

    let itemImgs: AptImg[] = [];
    let rawitemImgs: rawAptImgs = null;

    //fetch imgs for apt with get parameter ID when apt variable changes
    useLayoutEffect(() => {
        //when apt variable changes, check if apt is ready and if so, fetch imgs
        if (apt !== undefined) {

            fetch(`http://localhost:3001/api/getImg/${apt.Id}`, { cache: "no-cache" })
                .then(res => res.text())
                .then(res => {
                    rawitemImgs = JSON.parse(res);
                    //map from db img object to our img object
                    itemImgs = rawitemImgs.recordset.map(img => {
                        return {
                            AptId: img.ApartmentId,
                            ImgUrl: img.Path
                        } as AptImg
                    });
console.log(itemImgs)
                    setImgs(itemImgs);
                })
        }
    }, [apt])

    //apt is defined but imgs array is empty
    if (_.isEqual(imgs, [])&&(apt !== undefined)) {

        return (
            <>
                <h1>Apartment Details</h1>

                <div>No img</div>
                <div className='apt-header'>
                    <p>Address: 123 Main Street, Anytown, USA</p>
                    <p>Neighborhood: Downtown</p>
                    <p>Distance to public transportation: 0.5 miles</p>
                </div>

                <h2>Amenities</h2>
                <div>
                    <p>Number of bedrooms: 2</p>
                    <p>Number of bathrooms: 1</p>
                    <p>Size: 1000 sqft</p>
                    <p>Washer/dryer: Yes</p>
                    <p>Parking: Yes</p>
                    <p>Pool: Yes</p>
                </div>

                <h2>Description</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar eros eget risus interdum lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent feugiat vel nisl eu pharetra. Sed mollis, ipsum vel pellentesque elementum, mauris ipsum posuere mauris, vel varius nisl quam a nulla. Curabitur eu libero mi. Suspendisse a erat erat. Donec convallis tellus eget est eleifend porttitor.</p>
                </div>

                <h2>Pricing</h2>
                <div>
                    <p>Rent per month: $2000</p>
                    <p>Security deposit: $2000</p>
                    <p>Application fee: $50</p>
                </div>
            </>
        )
    } else if (apt === undefined){
        return <div>Apt not found</div>
    } else {
        return (
            <>
                <h1>Apartment Details</h1>

                <ImageCarousel images={imgs}/>
                <ImageBrowser ImgArray={imgs}></ImageBrowser>
                <div className='apt-header'>
                    <p>Address: 123 Main Street, Anytown, USA</p>
                    <p>Neighborhood: Downtown</p>
                    <p>Distance to public transportation: 0.5 miles</p>
                </div>

                <h2>Amenities</h2>
                <div>
                    <p>Number of bedrooms: 2</p>
                    <p>Number of bathrooms: 1</p>
                    <p>Size: 1000 sqft</p>
                    <p>Washer/dryer: Yes</p>
                    <p>Parking: Yes</p>
                    <p>Pool: Yes</p>
                </div>

                <h2>Description</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar eros eget risus interdum lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent feugiat vel nisl eu pharetra. Sed mollis, ipsum vel pellentesque elementum, mauris ipsum posuere mauris, vel varius nisl quam a nulla. Curabitur eu libero mi. Suspendisse a erat erat. Donec convallis tellus eget est eleifend porttitor.</p>
                </div>

                <h2>Pricing</h2>
                <div>
                    <p>Rent per month: $2000</p>
                    <p>Security deposit: $2000</p>
                    <p>Application fee: $50</p>
                </div>
            </>
        )
    }
}

function findAptWithId(apts: Item[], param: string): Item {
    const apt: Item = apts.find(apt => {

        if (apt.Id.toString() === param) {
            return apt;

        }
    });

    //returns undefined by default
    return apt;
}

