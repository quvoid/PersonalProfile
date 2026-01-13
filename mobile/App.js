import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
  Animated,
} from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

// Import local assets
// Note: In React Native, static images like this work best when required directly
const avatarImage = require('./assets/a1.jpeg');
const sekilasImage = require('./assets/sekilas.png');
const eazyStickersImage = require('./assets/eazystickers.png');


const { width } = Dimensions.get('window');

// --- Data ---
const SKILLS = [
  "Java", "React", "React Native", "Flutter", "Node.js",
  "Spring Boot", "Python", "Flask", "MongoDB", "SQL",
  "Tailwind CSS", "Git"
];

const PROJECTS = [
  {
    id: 1,
    title: 'Sekilas',
    description: 'Sekilas Glance is a modern trending news aggregator designed to combat information overload using Trending Keywords.',
    tags: ['Next.js', 'React19', 'CSS', 'MongoDB'],
    link: 'https://glanctrends.vercel.app/',
    github: 'https://github.com/quvoid/GlanceTrends',
    image: sekilasImage
  },
  {
    id: 2,
    title: 'E-commerce Website',
    description: 'E-commerce website built with React and CSS.',
    tags: ['React', 'CSS', 'Javascript'],
    link: '#',
    github: 'https://github.com/quvoid/EazyStickers',
    image: eazyStickersImage
  },
  {
    id: 3,
    title: 'Student Performance Predictor',
    description: 'A full-stack ML web application designed to predict student performance.',
    tags: ['HTML', 'Flask', 'Python', 'ML'],
    link: '#',
    github: 'https://github.com/quvoid/Student_Performance_Predictor',
    image: null
  },
  {
    id: 4,
    title: 'Flutter Mobile App',
    description: 'A cross-platform mobile application built with Flutter/React Native.',
    tags: ['React Native', 'Mobile', 'iOS', 'Android'],
    link: '#',
    github: '#',
    image: null
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [typingText, setTypingText] = useState('');
  const fullText = "Full Stack Developer";

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypingText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        // Optional: Reset after delay
        // setTimeout(() => { index=0 }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const openLink = async (url) => {
    if (url && url !== '#') {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    }
  };

  const renderHome = () => (
    <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
      {/* HERO SECTION */}
      <View style={styles.heroSection}>
        <View style={styles.avatarContainer}>
          <Image source={avatarImage} style={styles.avatar} />
        </View>

        <Text style={styles.greeting}>Hi, I'm <Text style={styles.highlight}>Omkar</Text></Text>

        <View style={styles.typingContainer}>
          <Text style={styles.typingText}>{typingText}</Text>
          <View style={styles.cursor} />
        </View>

        <Text style={styles.bio}>
          Aspiring Web Developer with a B.Tech in CSE from Parul University using Java, React, and Python.
        </Text>

        <Text style={styles.bio}>
          I specialize in backend systems (Java/Spring Boot) and now exploring Mobile Development with React Native!
        </Text>

        <View style={styles.socialRow}>
          <TouchableOpacity onPress={() => openLink('https://github.com/quvoid')} style={styles.socialBtn}>
            <FontAwesome name="github" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/omkar-rakshe-957ab5324')} style={styles.socialBtn}>
            <FontAwesome name="linkedin-square" size={24} color="#0077b5" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('mailto:omkarrakshe2808@gmail.com')} style={styles.socialBtn}>
            <MaterialCommunityIcons name="email" size={24} color="#db4437" />
          </TouchableOpacity>
        </View>
      </View>

      {/* SKILLS SECTION */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.skillsScroll}>
          {SKILLS.map((skill, index) => (
            <View key={index} style={styles.skillChip}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* PROJECTS SECTION */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Featured Projects</Text>
        {PROJECTS.map((project) => (
          <View key={project.id} style={styles.projectCard}>
            <View style={styles.projectImageContainer}>
              {project.image ? (
                <Image source={project.image} style={styles.projectImage} />
              ) : (
                <View style={[styles.projectImage, styles.placeholderImage]}>
                  <Feather name="code" size={40} color="#64748b" />
                </View>
              )}
            </View>

            <View style={styles.projectContent}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDesc} numberOfLines={3}>{project.description}</Text>

              <View style={styles.tagsRow}>
                {project.tags.map((tag, i) => (
                  <Text key={i} style={styles.tagText}>#{tag}</Text>
                ))}
              </View>

              <View style={styles.projectActions}>
                <TouchableOpacity onPress={() => openLink(project.link)} style={styles.actionLink}>
                  <Feather name="external-link" size={16} color="#2563eb" />
                  <Text style={styles.actionText}>Demo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink(project.github)} style={styles.actionLink}>
                  <FontAwesome name="github" size={16} color="#475569" />
                  <Text style={[styles.actionText, { color: '#475569' }]}>Source</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Footer Padding */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Portfolio</Text>
      </View>

      {renderHome()}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  contentContainer: {
    flex: 1,
  },
  heroSection: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#e2e8f0',
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
  },
  highlight: {
    color: '#2563eb',
  },
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    height: 30,
  },
  typingText: {
    fontSize: 18,
    color: '#475569',
    fontWeight: '500',
  },
  cursor: {
    width: 2,
    height: 20,
    backgroundColor: '#2563eb',
    marginLeft: 4,
  },
  bio: {
    textAlign: 'center',
    color: '#64748b',
    marginBottom: 12,
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 16,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 12,
  },
  socialBtn: {
    padding: 10,
    backgroundColor: '#f1f5f9',
    borderRadius: 50,
  },
  sectionContainer: {
    padding: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
    marginLeft: 4,
  },
  skillsScroll: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  skillChip: {
    backgroundColor: '#eff6ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#dbeafe',
  },
  skillText: {
    color: '#2563eb',
    fontWeight: '600',
    fontSize: 14,
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e2e8f0',

    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  projectImageContainer: {
    height: 180,
    width: '100%',
    backgroundColor: '#f1f5f9',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholderImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectContent: {
    padding: 16,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 6,
  },
  projectDesc: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12,
    lineHeight: 20,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  tagText: {
    fontSize: 12,
    color: '#2563eb',
    backgroundColor: '#eff6ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  projectActions: {
    flexDirection: 'row',
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 12,
  },
  actionLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563eb',
  },
});
