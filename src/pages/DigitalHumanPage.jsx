// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Card, CardContent, CardHeader, CardTitle, Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
// @ts-ignore;
import { Upload, Sparkles, Play } from 'lucide-react';

import { FileUploadSection } from '@/components/DigitalHuman/FileUploadSection';
import { AvatarPreview } from '@/components/DigitalHuman/AvatarPreview';
import { DigitalHumanSystemSelector } from '@/components/DigitalHuman/DigitalHumanSystemSelector';
import { DigitalHumanVideoSettings } from '@/components/DigitalHuman/DigitalHumanVideoSettings';
import { DigitalHumanGenerationModal } from '@/components/DigitalHuman/GenerationModal';
import { WorksList } from '@/components/DigitalHuman/WorksList';
export default function DigitalHumanPage(props) {
  const [selectedSystem, setSelectedSystem] = useState('ali');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [videoSettings, setVideoSettings] = useState({
    resolution: '1080p',
    fps: 30,
    quality: 'high'
  });
  const [showGenerationModal, setShowGenerationModal] = useState(false);
  const [generationData, setGenerationData] = useState(null);
  const handleGenerate = () => {
    if (!audioFile || !selectedAvatar) {
      alert('请先上传音频文件并选择数字人形象');
      return;
    }
    setGenerationData({
      audioFile,
      selectedAvatar,
      videoSettings,
      system: selectedSystem,
      audioUrl: audioFile.url || URL.createObjectURL(audioFile),
      title: audioFile.name || '数字人视频'
    });
    setShowGenerationModal(true);
  };
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            数字人视频生成
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            上传音频，选择数字人形象，一键生成专业视频
          </p>
        </div>

        <Tabs defaultValue="create" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="create">创建视频</TabsTrigger>
            <TabsTrigger value="works">我的作品</TabsTrigger>
          </TabsList>

          <TabsContent value="create">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="w-5 h-5" />
                      上传音频
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FileUploadSection onFileSelect={setAudioFile} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>视频设置</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <DigitalHumanVideoSettings settings={videoSettings} onSettingsChange={setVideoSettings} />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      选择系统
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <DigitalHumanSystemSelector selectedSystem={selectedSystem} onSystemChange={setSelectedSystem} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>选择形象</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AvatarPreview selectedSystem={selectedSystem} selectedAvatar={selectedAvatar} onAvatarSelect={setSelectedAvatar} />
                  </CardContent>
                </Card>

                <Button className="w-full" size="lg" onClick={handleGenerate} disabled={!audioFile || !selectedAvatar}>
                  <Play className="w-5 h-5 mr-2" />
                  开始生成
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="works">
            <WorksList />
          </TabsContent>
        </Tabs>

        <DigitalHumanGenerationModal isOpen={showGenerationModal} onClose={() => setShowGenerationModal(false)} generationData={generationData} />
      </div>
    </div>;
}