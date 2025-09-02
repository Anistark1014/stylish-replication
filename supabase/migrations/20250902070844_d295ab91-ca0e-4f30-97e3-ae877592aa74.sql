-- Fix function security issues by setting proper search paths
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add missing RLS policies for authenticated users
CREATE POLICY "Authenticated users can view follows" ON public.follows FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can follow others" ON public.follows FOR INSERT TO authenticated WITH CHECK (auth.uid() = follower_id);
CREATE POLICY "Users can unfollow" ON public.follows FOR DELETE TO authenticated USING (auth.uid() = follower_id);

CREATE POLICY "Users can view org memberships" ON public.organization_members FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can view club memberships" ON public.club_members FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can like posts" ON public.post_likes FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can like posts" ON public.post_likes FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can unlike posts" ON public.post_likes FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can view comments" ON public.post_comments FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can comment on posts" ON public.post_comments FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their comments" ON public.post_comments FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their comments" ON public.post_comments FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can view shares" ON public.post_shares FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can share posts" ON public.post_shares FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their bookmarks" ON public.bookmarks FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can bookmark items" ON public.bookmarks FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can remove bookmarks" ON public.bookmarks FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can view stories" ON public.stories FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can create stories" ON public.stories FOR INSERT TO authenticated WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Users can update their stories" ON public.stories FOR UPDATE TO authenticated USING (auth.uid() = author_id);
CREATE POLICY "Users can delete their stories" ON public.stories FOR DELETE TO authenticated USING (auth.uid() = author_id);

CREATE POLICY "Users can like stories" ON public.story_likes FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can like stories insert" ON public.story_likes FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view story replies" ON public.story_replies FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can reply to stories" ON public.story_replies FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view story views" ON public.story_views FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can record story views" ON public.story_views FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can view events" ON public.events FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can create events" ON public.events FOR INSERT TO authenticated WITH CHECK (auth.uid() = created_by);
CREATE POLICY "Event creators can update events" ON public.events FOR UPDATE TO authenticated USING (auth.uid() = created_by);

CREATE POLICY "Users can view RSVPs" ON public.event_rsvps FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can RSVP to events" ON public.event_rsvps FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their RSVPs" ON public.event_rsvps FOR UPDATE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can view their notifications" ON public.notifications FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can update their notifications" ON public.notifications FOR UPDATE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can view their conversations" ON public.conversations FOR SELECT TO authenticated USING (
  EXISTS (SELECT 1 FROM public.conversation_participants WHERE conversation_id = conversations.id AND user_id = auth.uid())
);
CREATE POLICY "Users can create conversations" ON public.conversations FOR INSERT TO authenticated WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can view conversation participants" ON public.conversation_participants FOR SELECT TO authenticated USING (
  EXISTS (SELECT 1 FROM public.conversation_participants cp WHERE cp.conversation_id = conversation_participants.conversation_id AND cp.user_id = auth.uid())
);
CREATE POLICY "Users can add participants" ON public.conversation_participants FOR INSERT TO authenticated WITH CHECK (
  auth.uid() IN (SELECT created_by FROM public.conversations WHERE id = conversation_id)
);

CREATE POLICY "Users can view conversation messages" ON public.messages FOR SELECT TO authenticated USING (
  EXISTS (SELECT 1 FROM public.conversation_participants WHERE conversation_id = messages.conversation_id AND user_id = auth.uid())
);
CREATE POLICY "Users can send messages" ON public.messages FOR INSERT TO authenticated WITH CHECK (
  auth.uid() = sender_id AND 
  EXISTS (SELECT 1 FROM public.conversation_participants WHERE conversation_id = messages.conversation_id AND user_id = auth.uid())
);
CREATE POLICY "Users can update their messages" ON public.messages FOR UPDATE TO authenticated USING (auth.uid() = sender_id);

CREATE POLICY "Anyone can view marketplace listings" ON public.marketplace_listings FOR SELECT USING (status = 'active');
CREATE POLICY "Users can create listings" ON public.marketplace_listings FOR INSERT TO authenticated WITH CHECK (auth.uid() = seller_id);
CREATE POLICY "Users can update their listings" ON public.marketplace_listings FOR UPDATE TO authenticated USING (auth.uid() = seller_id);

CREATE POLICY "Users can create reports" ON public.reports FOR INSERT TO authenticated WITH CHECK (auth.uid() = reporter_id);
CREATE POLICY "Admins can view reports" ON public.reports FOR SELECT TO authenticated USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);