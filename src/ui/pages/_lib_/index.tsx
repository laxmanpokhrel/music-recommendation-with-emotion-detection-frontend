/* eslint-disable import/prefer-default-export */
import { postService } from '@Api/services';
import { Proxies } from '@Constants/Proxies';

export async function postInterceptor(data: Record<string, any>) {
  try {
    const { music, thumbnail, singer, writer, composer, keywords, duration, releaseDate, isPublished, ...rest } = data;

    // postmusic

    const musicFormData = new FormData();
    musicFormData.append('file', music[0].fileObject);
    musicFormData.append('type', 'music');
    const musicResponse = await postService(true, Proxies.API_URL, '/media/upload', musicFormData, true);
    // post thumbnail
    const thumbnailFormData = new FormData();
    thumbnailFormData.append('file', thumbnail[0].fileObject);
    thumbnailFormData.append('type', 'thumbnail');
    const thumbnailResponse = await postService(true, Proxies.API_URL, '/media/upload', thumbnailFormData, true);

    const finalPostData = {
      ...rest,
      music: musicResponse.data.id.toString(),
      thumbnail: thumbnailResponse.data.id.toString(),
      singer: [singer],
      writer: [writer],
      composer: [composer],
      keywords: [keywords],
      duration: +duration,
      releaseDate: new Date(releaseDate).toISOString(),
      isPublished: !!isPublished,
    };
    await postService(true, Proxies.API_URL, '/music/upload', finalPostData);
    return true;
  } catch (err) {
    return false;
    // console.log(err.message, 'error');
  }
}
