import React, { useLayoutEffect, useState } from 'react'
import { img1, img2 } from '../../images';
import { State, Item, TagAptCon, Tag, AptImg, rawAptImgs, RenderSettings } from '../../interfaces/interfaces'
import { ItemProps } from '../../interfaces/interfaces'
import { useSelector } from 'react-redux';



export default function itemcard({ Item }: ItemProps) {
  //state for images for the given item (apt)
  const [imgs, setImgs] = useState<AptImg[]>([]);

  //tag connection objects from redux store which are always fetched before parent component renders this component
  const TagAptCons: TagAptCon[] = useSelector((state: State) => state.tagaptcons);

  //all tags from redux store which are always fetched before parent component renders this component
  const Tags: Tag[] = useSelector((state: State) => state.tags);

  //typed objects used in the component
  let itemTags: Tag[] = [];
  let itemTagIds: number[] = [];

  let itemImgs: AptImg[] = [];
  let rawitemImgs: rawAptImgs = null;

  const noImgUrl = "data:image/jpeg;base64,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";

  //arrays and objects r passed by ref in js so itemTags is filled with tags for the item in prop inside function
  getTagsforItem(TagAptCons, Item, itemTagIds, Tags, itemTags);

  //object with bool attributes used for conditional rendering
  const renderSettings: RenderSettings = setRenderSettings(imgs, itemTags);

  useLayoutEffect(() => {
    fetch(`http://localhost:3001/api/getImg/${Item.Id}`, { cache: "no-cache" })
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

        setImgs(itemImgs);
      })

  }, [])



  return (
    <div className="item-card">
      <div className="img-wrapper">
        {/* one img remains hidden depending on item-card-wrapper's hover element */}
        {renderSettings.isImg0 ? (
          <img src={noImgUrl} className="img-generic" />
        ) : renderSettings.isImg1 ? (
          <img src={imgs[0].ImgUrl} className="img-generic" />
        ) : renderSettings.isImg2 ? (
          <>
            <img src={imgs[0].ImgUrl} className="img1" />
            <img src={imgs[1].ImgUrl} className="img2" />
          </>
        ) : renderSettings.isImg3orMore ? (
          <>
            <img src={imgs[0].ImgUrl} className="img1" />
            <img src={imgs[1].ImgUrl} className="img2" />
          </>
        ) : null}
      </div>
      <div className="desc-wrapper">
        <div className="desc-primary-element">{Item.Name}</div>
        <div className="desc-secondary-element">
          {/* one desc remains hidden depending on item-card-wrapper's hover element */}
          {renderSettings.isTags0 ? (
            <>
              <div className="desc-1">{Item.Address}</div>
              <div className="desc-2">{Item.Id}</div>
            </>
          ) : renderSettings.isTags1 ? (
            <>
              <div className="desc-1">{Item.Address}</div>
              <div className="desc-2">{itemTags[0].Name}</div>
            </>
          ) : renderSettings.isTags2 ? (
            <>
              <div className="desc-1">{Item.Address}</div>
              <div className="desc-2">
                {itemTags[0].Name}, {itemTags[1].Name}
              </div>
            </>
          ) : renderSettings.isTags3orMore ? (
            <>
              <div className="desc-1">{Item.Address}</div>
              <div className="desc-2">
                {itemTags[0].Name}, {itemTags[1].Name}...
              </div>
            </>
          ) : null}
        </div>
        <div className="price-element">
          <div className="price-button">
            <div className="price-button-content">Find out more</div>
          </div>
        </div>
      </div>
    </div>
  );

}

function getTagsforItem(TagAptCons: TagAptCon[], Item: Item, itemTagIds: number[], Tags: Tag[], itemTags: Tag[]) {
  TagAptCons.forEach(TagAptCon => {

    if (TagAptCon.AptId == Item.Id) {
      itemTagIds.push(TagAptCon.TagId);
    }
  });

  itemTagIds.forEach(id => {
    Tags.forEach(tag => {
      if (tag.Id == id)
        itemTags.push(tag);
    });
  });
}

function setRenderSettings(imgs: AptImg[], itemTags: Tag[]) {
  let renderSettings: RenderSettings = {
    isImg0: false,
    isImg1: false,
    isImg2: false,
    isImg3orMore: false,
    isTags0: false,
    isTags1: false,
    isTags2: false,
    isTags3orMore: false
  }

  //img settings
  if (imgs.length === 0) {
    renderSettings.isImg0 = true;
  } else if (imgs.length === 1) {
    renderSettings.isImg1 = true;
  } else if (imgs.length === 2) {
    renderSettings.isImg2 = true;
  } else if (imgs.length > 2) {
    renderSettings.isImg3orMore = true;
  }
  //tags settings
  if (itemTags.length === 0) {
    renderSettings.isTags0 = true;
  } else if (itemTags.length === 1) {
    renderSettings.isTags1 = true;
  } else if (itemTags.length === 2) {
    renderSettings.isTags2 = true;
  } else if (itemTags.length > 2) {
    renderSettings.isTags3orMore = true;
  }

  return renderSettings;

}
