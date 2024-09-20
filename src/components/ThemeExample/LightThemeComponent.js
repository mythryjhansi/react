import React, { useEffect } from "react";
import withTheme from "../../HOC/withDarkTheme";

const LightThemeComponent = ({ title }) => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
        scelerisque erat et placerat. Nulla facilisi. Etiam in imperdiet mi.
        Phasellus ut sodales diam. Aliquam ut dapibus risus. Nunc quis arcu non
        libero dictum scelerisque id at diam. Proin vestibulum ipsum a mattis
        vestibulum.
      </p>
      <p>
        Quisque eu quam eu augue eleifend finibus vel sit amet ex. Vestibulum
        facilisis sed felis a fermentum. Aliquam aliquet lacus dolor, nec dictum
        est lacinia ut. Suspendisse rhoncus ante finibus congue finibus. Etiam
        euismod blandit mi non mollis. Etiam vitae tincidunt mauris. Ut suscipit
        neque at enim lacinia, blandit blandit ante feugiat. Morbi laoreet nibh
        eros, nec blandit mi lobortis vitae. Nam in sem eget diam cursus finibus
        sit amet eu ipsum. Suspendisse vitae ultrices eros. Praesent posuere
        nisi ut quam sagittis, ut lacinia quam cursus. Ut suscipit mollis
        laoreet. Fusce placerat diam mattis, cursus tortor vel, blandit nibh.
        Donec sit amet justo enim. Morbi elementum id augue vitae scelerisque.
      </p>
      <p>
        Donec tempus convallis mauris, ac porta massa eleifend nec. Ut urna
        purus, venenatis a pretium vel, dignissim blandit velit. Nunc non
        accumsan est. Maecenas facilisis, dui vitae ullamcorper pellentesque,
        erat ante euismod ante, quis rutrum urna diam ac nulla. Curabitur id
        accumsan arcu. Pellentesque tempus diam vitae posuere sodales. Ut sed
        sollicitudin ex, at luctus neque. Nunc id quam volutpat, hendrerit eros
        eget, vestibulum nisi. Fusce nec facilisis risus. Phasellus id blandit
        elit, eget fringilla elit. Maecenas nibh risus, vestibulum eget
        consequat in, feugiat eu nunc. Nunc ex orci, laoreet eget dignissim
        tristique, ullamcorper a quam. Nulla vel turpis eu nisi molestie finibus
        vitae ut mauris.
      </p>
    </div>
  );
};

export default withTheme(LightThemeComponent, "light");
