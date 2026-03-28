import { chatgptMobilePosts } from './src/lib/posts-chatgpt-mobile'
import { cleanTextPosts } from './src/lib/posts-clean-text'
import { formattingPosts } from './src/lib/posts-formatting'
import { aiToolsPosts } from './src/lib/posts-ai-tools'
import { mobileProductivityPosts } from './src/lib/posts-mobile-productivity'

console.log('chatgptMobilePosts:', chatgptMobilePosts.length)
console.log('cleanTextPosts:', cleanTextPosts.length)
console.log('formattingPosts:', formattingPosts.length)
console.log('aiToolsPosts:', aiToolsPosts.length)
console.log('mobileProductivityPosts:', mobileProductivityPosts.length)
console.log('Total:', chatgptMobilePosts.length + cleanTextPosts.length + formattingPosts.length + aiToolsPosts.length + mobileProductivityPosts.length)
