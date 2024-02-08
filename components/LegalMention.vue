<template>
  <div class="container mx-auto p-8">
    <section
      v-for="section in legalSections"
      :key="section.title"
      class="mb-8 fade-scroll"
      :class="{ visible: isVisible }"
    >
      <h2 class="text-2xl font-bold mb-4">{{ section.title }}</h2>
      <p v-if="section.content" v-html="section.content"></p>
      <br />
      <p v-if="section.note" v-html="section.note"></p>
      <br />
      <ul v-if="section.listItems">
        <li v-for="item in section.listItems" :key="item" v-html="item" ></li>
      </ul>
    </section>
  </div>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";

export default {
  mixins: [scrollFadeMixin],
  data() {
    return {
      legalSections: [
        {
          title: "Mentions Légales",
          content:
            "La seule contrepartie à l’utilisation de ces mentions légales, est l’engagement total à laisser le lien crédit subdelirium sur cette page de mentions légales.",
        },
        {
          title: "Informations légales",
          content:
            "Présentation du site. En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site https://jpcreationcartespostales.fr/ l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :",
          listItems: [
            "<strong>Propriétaire :</strong> Jean-Pierre LEFEVRE",
            "<strong>Créateur :</strong> ODACE France <a href='https://odace-france.fr/'>https://odace-france.fr/</a>",
            "<strong>Responsable publication :</strong> Jean-Pierre LEFEVRE",
            "<strong>Webmaster :</strong> ODACE France <a href='https://odace-france.fr/'>https://odace-france.fr/</a>",
            "<strong>Hébergeur :</strong> Ionos <a href='https://www.ionos.fr/'>https://www.ionos.fr/</a>",
          ],
        },
        {
          title:
            "Conditions générales d’utilisation du site et des services proposés",
          content:
            "L’utilisation du site https://jpcreationcartespostales.fr/ implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site https://jpcreationcartespostales.fr/ sont donc invités à les consulter de manière régulière.",
        },
        {
          title: "Description des services fournis",
          content:
            "Le site https://jpcreationcartespostales.fr/ a pour objet de fournir une information concernant l’ensemble des activités de la société.",
          note: "Jean-Pierre LEFEVRE s’efforce de fournir sur le site https://jpcreationcartespostales.fr/ des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.",
        },
        {
          title: "Limitations contractuelles sur les données techniques",
          content:
            "Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.",
        },
        {
          title: "Propriété intellectuelle et contrefaçons",
          content:
            "Jean-Pierre LEFEVRE est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.",
          note: "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : Jean-Pierre LEFEVRE.",
        },
        {
          title: "Limitations de responsabilité",
          content:
            "Jean-Pierre LEFEVRE ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site https://jpcreationcartespostales.fr/, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.",
          note: "Jean-Pierre LEFEVRE ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site https://jpcreationcartespostales.fr/",
        },
        {
          title: "Gestion des données personnelles",
          content:
            "En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.",
          note: "A l’occasion de l’utilisation du site https://jpcreationcartespostales.fr/, peuvent être recueillies : l’URL des liens par l’intermédiaire desquels l’utilisateur a accédé au site https://jpcreationcartespostales.fr/, le fournisseur d’accès de l’utilisateur, l’adresse de protocole Internet (IP) de l’utilisateur.",
        },
        {
          title: "Liens hypertextes et cookies",
          content:
            "Le site https://jpcreationcartespostales.fr/ contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de Jean-Pierre LEFEVRE. Cependant, Jean-Pierre LEFEVRE n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.",
          note: "La navigation sur le site https://jpcreationcartespostales.fr/ est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.",
        },
        {
          title: "Droit applicable et attribution de juridiction",
          content:
            "Tout litige en relation avec l’utilisation du site https://jpcreationcartespostales.fr/ est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.",
          note: "Les principales lois concernées sont la Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et aux libertés, et la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.",
        },
        {
          title: "Lexique",
          content:
            "Utilisateur : Internaute se connectant, utilisant le site susnommé. Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).",
        },
      ],
    };
  },
};
</script>
