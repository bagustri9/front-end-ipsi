import api from "../api.js";
import { useState, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const PhotoEdit = (props) => {
  const swal = withReactContent(Swal);
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const [crop, setCrop] = useState({
    unit: "px",
    width: 250,
    aspect: 2 / 2,
    x: 0,
    y: 0,
    minWidth: 200,
  });
  const [src, setSrc] = useState(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState();
  const [imageRef, setImageRef] = useState();
  let fileUrl;

  const simpanGambar = () => {
    fetch(croppedImageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const fd = new FormData();
        fd.append("image", blob, "file.jpeg");
        swal.showLoading();
        api
          .post("api/user/profile-image/" + props.data.id, fd, config)
          .then((res) => {
            console.log(res);
            props.modal(false);
            props.refresh();
            swal.fire({
              title: <strong>Sukses !</strong>,
              html: <i>Data Berhasil Ditambah !</i>,
              icon: "success",
            });
          })
          .catch((err) => {
            swal.fire({
              title: <strong>Gagal Ubah Profile !</strong>,
              html: <i>Terdapat kesalahan</i>,
              icon: "error",
            });
          });
      });
  };
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoaded = (image) => {
    setImageRef(image);
  };

  const onCropComplete = (crop) => {
    makeClientCrop(crop);
  };

  const onCropChange = (crop, percentCrop) => {
    setCrop(crop);
  };

  useEffect(() => {
    if (imageRef) {
      makeClientCrop(crop);
    }
  }, [imageRef]);

  const makeClientCrop = async (crop) => {
    if (imageRef && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(
        imageRef,
        crop,
        "newFile.jpeg"
      );
      setCroppedImageUrl(croppedImageUrl);
    }
  };

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            console.error("Canvas is empty");
            return;
          }
          blob.name = fileName;
          window.URL.revokeObjectURL(fileUrl);
          fileUrl = window.URL.createObjectURL(blob);
          resolve(fileUrl);
        },
        "image/jpeg",
        1
      );
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-5 offset-1 mr-2 p-0">
          <p className="col-12 text-center fs-3">Editor</p>
          {src && (
            <ReactCrop
              src={src}
              crop={crop}
              ruleOfThirds
              onImageLoaded={onImageLoaded}
              onComplete={onCropComplete}
              onChange={onCropChange}
              className="col-12 p-0"
            />
          )}
        </div>
        <div className="col-5 ml-2 p-0">
          <p className="col-12 text-center fs-3">Preview</p>
          {croppedImageUrl && (
            <img
              alt="Crop"
              style={{ width: "400px" }}
              className="col-12 p-0"
              src={croppedImageUrl}
            />
          )}
        </div>
      </div>
      <div className="input-group mt-3">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
          accept="image/*"
          onChange={onSelectFile}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="inputGroupFileAddon04"
          onClick={() => simpanGambar()}
        >
          Simpan
        </button>
      </div>
    </>
  );
};

export default PhotoEdit;
